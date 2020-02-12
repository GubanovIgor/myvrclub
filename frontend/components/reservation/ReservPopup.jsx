import React, { Component } from "react"
import { connect } from 'react-redux';

const moment = require("moment")

// ActionCreators
import { getFreeSessionsThunk } from '../../redux/actions/reservation';

// Import Components
import DateField from "./DateField"
import PriceCategory from "./PriceCategory"
import TimeItem from "./TimeItem"
import ModelSection from "./ModelSection"
import PersonalDataPopup from "./PersonalDataPopup"

// Styled Components
import {
  ReservPopupWrapper,
  Content,
  FadeScreen,
  Header,
  Title,
  TitleInfo,
  DateAndPriceInfo,
  Paragraph,
  PriceCategorys,
  TimeTable,
  HeadsetsSectionWrapper,
  HeadsetsInfo,
  HeadsetsTable,
  ToPersonalData,
  PriceInfo,
  Sum,
  Commission,
  ToPersonalDataButton,
  CloseButton,
  AddInfo,
  ValidationHint
} from "../../stylesheets/reservation"

import { prices, headsets, headsets2 } from "./mok"

class ReservPopup extends Component {
  state = {
    step: "date and time",
    timeLapse: [],
    currentDate: moment(new Date()).format("DD-MM-YY"),
    selectedTime: [],
    headsetsPack: [],
    sum: 0,
    PersonalDataPopupStatus: false,
    timeValidation: false,
    headsetsValidation: false,
    countOfChosenHeadsets: null
  }

  componentDidMount = () => {
    this.headsetsCountStartValue()
    this.getTimeLapse(this.props.club)
  }

  // Задаем начальное значение при выборе очков
  headsetsCountStartValue = async () => {
    await this.props.getFreeSessions(this.props.club._id, '1234')
    let countOfChosenHeadsets = {}
    console.log('this.props.freeSessions', this.props.freeSessions)
    Object.keys(this.props.freeSessions).forEach(
      item => (countOfChosenHeadsets[`${item}`] = { current: 0, all: 0 })
    );
    this.setState({ countOfChosenHeadsets: countOfChosenHeadsets })
  }

  // Рычаг переключения количества очков
  headsetsCountValueHandler = (model, action) => {
    let countOfChosenHeadsetsCopy = this.state.countOfChosenHeadsets
    action === "plus"
      ? (countOfChosenHeadsetsCopy[model].current += 1)
      : (countOfChosenHeadsetsCopy[model].current -= 1)
    this.setState({countOfChosenHeadsets: countOfChosenHeadsetsCopy})
    this.getSum()
  }

  getTimeLapse = clubSettings => {
    //Данные которые придут из клуба
    const start = "11:00";
    const end = "22:00";
    let interval = 60;
    const priceRange = [
      { category: "low", start: "11:00", end: "14:00", price: 400 },
      { category: "middle", start: "14:00", end: "20:00", price: 700 },
      { category: "high", start: "20:00", end: "22:00", price: 1500 }
    ];

    const reservedSessions = {
      "15.11.19": ["10:00", "16:00", "19:00"],
      "14.11.19": ["12:00", "13:00", "14:00"],
      "16.11.19": ["11:00", "17:00", "20:00"]
    };

    let timeLapse = [];

    let workStart = moment(start, "HH:mm").subtract(interval, "m"); // Отнимаем один интервал, чтобы не потерять первый сеанс
    let workStartCheck = moment(start, "HH:mm");
    let workEnd = moment(end, "HH:mm");

    // Если клуб заканчивает работать после 00:00, прибавляем к workEnd 1 день
    if (workEnd.isBefore(workStart)) {
      workEnd = moment(end, "HH:mm").add(1, "day");
    }

    // Собираем массив сеансов
    while (workStart.isBefore(workEnd)) {
      // Создаем сеанс, вычисляем его время
      let timeBlock = {};
      timeBlock.time = moment(workStart, "HH:mm")
        .add(interval, "m")
        .format("HH:mm");
      // Добавляем статус
      timeBlock.status = false;
      // Определяем ценовую категория сеанса (.subtract(interval*2, 'm') -  необходимо, чтобы первые два сеанса получили категорию)
      priceRange.forEach(el => {
        if (
          workStart.isAfter(
            moment(el.start, "HH:mm").subtract(interval * 2, "m")
          ) &&
          workStart.isBefore(workEnd)
        ) {
          timeBlock.category = el.category;
          timeBlock.price = el.price;
        }
        // Определяем занят ли сеанс
        if (reservedSessions.hasOwnProperty(this.state.currentDate)) {
          if (
            reservedSessions[this.state.currentDate].includes(timeBlock.time)
          ) {
            timeBlock.category = "not available";
          }
        }
        if (
          moment().isAfter(
            moment(
              this.state.currentDate + " " + timeBlock.time,
              "DD.MM.YY HH:mm"
            )
          )
        ) {
          timeBlock.category = "not available";
        }
      });
      // Добавляем сеанс в массив сеансов
      timeLapse.push(timeBlock);

      // Переход к следующему сеансу
      workStart = moment(timeBlock.time, "HH:mm");
      // Проверяем, если мы перешли за 00:00, то делаем переход на следующий день
      if (workStart.isBefore(workStartCheck)) {
        workStart = moment(timeBlock.time, "HH:mm").add(1, "day");
      }
    }

    // Убираем последний сеанс, т.к. он выходит за рамки рабочего дня
    timeLapse.pop();
    this.setState({ timeLapse: timeLapse });
  }

  // Ручка выбора даты
  handleChangeDate = async date => {
    const currentDate = moment(date).format("DD-MM-YY");
    await this.setState({ currentDate: currentDate });
    this.setState({ selectedTime: [], sum: 0 });
    this.getTimeLapse();
  }

  // Ручка выбора времени
  handleSelectSession = async time => {
    // Меняем статус у сеансов для рендера
    let timeLapse = this.state.timeLapse;
    timeLapse.forEach(el => {
      if (el.time === time) {
        el.status = !el.status;
      }
    });
    await this.setState({ timeLapse: timeLapse });

    // Получаем все выбранные сеансы в отдельный массив
    let selectedTime = [];
    this.state.timeLapse.forEach(el => {
      if (el.status === true) {
        selectedTime.push(el.time);
      }
    });
    await this.setState({ selectedTime: selectedTime });

    this.setState({ timeValidation: false });

    this.cancelGlasses()
    this.getGlasses2();
    this.getSum()
  }

  getCountOfFreeGlasses = (array, selectedDate, selectedTime, model) => {
    let countOfChosenHeadsetsCopy = this.state.countOfChosenHeadsets
    array.forEach(headset => {
      if (!headset[selectedDate]) {
        countOfChosenHeadsetsCopy[model].all += 1
      } else {
        let checkTime = false
        selectedTime.forEach(time => {
          if (headset[selectedDate].includes(time)) {
            checkTime = true
          }
        })
        if (!checkTime) {
          countOfChosenHeadsetsCopy[model].all += 1
        }
      }
    })
    this.setState({countOfChosenHeadsets: countOfChosenHeadsetsCopy})
  }

  cancelGlasses = () => {
    let countOfChosenHeadsetsCopy = this.state.countOfChosenHeadsets
    Object.keys(countOfChosenHeadsetsCopy).forEach(el => countOfChosenHeadsetsCopy[el] = { current: 0, all: 0 })
    this.setState({ countOfChosenHeadsets: countOfChosenHeadsetsCopy })
  }

  getGlasses2 = () => {
    const { currentDate, selectedTime } = this.state

    this.props.getFreeSessions(this.props.club._id, currentDate)

    Object.keys(this.props.freeSessions).forEach(model => {
      this.getCountOfFreeGlasses(this.props.freeSessions[model], currentDate, selectedTime, model)
    })
  }

  // Считаем общий счет
  getSum = () => {
    const { countOfChosenHeadsets, timeLapse } = this.state

    // Находим количество выбранных очков
    let headsetsCount = 0
    Object.keys(countOfChosenHeadsets).forEach(model => {
      headsetsCount += countOfChosenHeadsets[model].current
    })

    // Цена выбранных сеансов за одни очки
    let priceForOne = 0;
    timeLapse.forEach(el => {
      if (el.status) {
        priceForOne += el.price
      }
    })

    this.setState({ sum: priceForOne * headsetsCount })
  }

  // Показывает подсказки валидации
  toPersonalDataValidation = () => {
    let check = true

    if (this.state.selectedTime.length === 0) {
      this.setState({ timeValidation: true })
      check = false
    } else if (this.state.sum === 0) {
      this.setState({ headsetsValidation: true })
      check = false
    }

    return check
  }

  // Показывает попап сбора личных данных
  handlerPersonalDataPopup = () => {
    if (this.toPersonalDataValidation())
      this.setState({
        PersonalDataPopupStatus: !this.state.PersonalDataPopupStatus
      })
  }

  render() {
    return (
      <ReservPopupWrapper status={this.props.status}>
        <CloseButton onClick={this.props.handleReservePopup} />

        <Content>
          <Header>
            <Title>Нереальное место</Title>
            <TitleInfo>м. Курская</TitleInfo>
          </Header>

          <DateAndPriceInfo>
            <Paragraph>
              Выберите дату и время
              <ValidationHint status={this.state.timeValidation}>
                Выберите время
              </ValidationHint>
            </Paragraph>

            <DateField
              handleChangeDate={this.handleChangeDate}
              currentDate={this.state.currentDate}
            />

            <PriceCategorys>
              {prices.map((el, i) => {
                return (
                  <PriceCategory price={el.price} key={i} color={el.color} />
                );
              })}
            </PriceCategorys>
          </DateAndPriceInfo>

          <TimeTable>
            {this.state.timeLapse.map((el, i) => {
              return (
                <TimeItem
                  time={el.time}
                  category={el.category}
                  status={el.status}
                  key={i}
                  handleSelectSession={this.handleSelectSession}
                />
              );
            })}
          </TimeTable>

          <HeadsetsSectionWrapper status={this.state.selectedTime.length}>
            <HeadsetsInfo>
              <Paragraph>
                Выберите VR очки
                <ValidationHint status={this.state.headsetsValidation}>
                  Выберите модель и количество VR очков
                </ValidationHint>
              </Paragraph>
            </HeadsetsInfo>
            {this.state.countOfChosenHeadsets && (
              <HeadsetsTable>
                {Object.keys(this.props.freeSessions).map((section, i) => {
                  console.log(this.props.freeSessions)
                  return (
                    <ModelSection
                      section={section}
                      key={i}
                      headsetsValue={
                        this.state.countOfChosenHeadsets[`${section}`]
                      }
                      headsetsCountValueHandler={this.headsetsCountValueHandler}
                    />
                  )
                })}
              </HeadsetsTable>
            )}
          </HeadsetsSectionWrapper>

          <ToPersonalData>
            <AddInfo>
              * При игре от 60 минут - скидка 10%
              <br />
              ** Скидка 30% в день рождения
            </AddInfo>
            <PriceInfo>
              <Sum>{this.state.sum} ₽</Sum>
              <Commission>Без комиссии</Commission>
            </PriceInfo>
            <ToPersonalDataButton onClick={this.handlerPersonalDataPopup}>
              Продолжить
            </ToPersonalDataButton>
          </ToPersonalData>

          <PersonalDataPopup
            reservPopupData={{
              clubId: this.props.club._id,
              date: this.state.currentDate,
              time: this.state.selectedTime,
              countOfChosenHeadsets: this.state.countOfChosenHeadsets,
              sum: this.state.sum
            }}
            status={this.state.PersonalDataPopupStatus}
            handler={this.handlerPersonalDataPopup}
          />
        </Content>

        <FadeScreen onClick={this.props.handleReservePopup} />
      </ReservPopupWrapper>
    )
  }
}

ReservPopup.defaultProps = {
  freeSessions: {}
};

const mapStateToProps = (store) => {
  return {
    freeSessions: store.freeSessions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFreeSessions: (clubId, currentDate) => dispatch(getFreeSessionsThunk(clubId, currentDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservPopup);
