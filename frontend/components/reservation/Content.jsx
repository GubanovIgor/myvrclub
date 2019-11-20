import React, { useState, useEffect } from 'react';

const Content = (props) => {
  return (
    <Content>
      <Header>
        <Title>
          Нереальное место
        </Title>
        <TitleInfo>
          м. Курская
        </TitleInfo>
      </Header>

      <DateAndPriceInfo>
        <Paragraph>
          Выберите дату и время
        <ValidationHint status={this.state.timeValidation}>
          Выберите время
        </ValidationHint>
        </Paragraph>

        <DateField handleChangeDate={this.handleChangeDate} currentDate={this.state.currentDate} />

        <PriceCategorys>
          {prices.map((el, i) => {
            return <PriceCategory price={el.price} key={i} color={el.color} />
          })}
        </PriceCategorys>
      </DateAndPriceInfo>

      <TimeTable>
        {this.state.timeLapse.map((el, i) => {
          return <TimeItem
            time={el.time}
            category={el.category}
            status={el.status}
            key={i}
            handleSelectSession={this.handleSelectSession} />
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

        <HeadsetsTable>
          {this.state.headsetsPack.map((section, i) => {
            return <ModelSection section={section} key={i} handleSelectGlasses={this.handleSelectGlasses} />
          })}
        </HeadsetsTable>
      </HeadsetsSectionWrapper>

      <ToPersonalData>
        <AddInfo>
          * При игре от 60 минут - скидка 10%<br />
          ** Скидка 30% в день рождения
        </AddInfo>
        <PriceInfo>
          <Sum>
            {this.state.sum} ₽
          </Sum>
          <Commission>
            Без комиссии
          </Commission>
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
          headsets: this.state.headsetsPack,
          sum: this.state.sum,
        }}
        status={this.state.PersonalDataPopupStatus}
        handler={this.handlerPersonalDataPopup} />
    </Content>
  );
}

export default Content;