import { useSelector, useDispatch } from "react-redux";
import { useTest } from '../../hooks/useTest';

import {
  ClientCardWrapper,
  Title,
  Content,
  Buttons,
  Confirm,
  Cancel,
} from './styles/myclubs'

const ClientCard = (props) => {

  const value = useTest(9)

  return (
    <ClientCardWrapper>
      <Title>
        PortalVR
        <p>м. Маяковская</p>
      </Title>

      <Content>
        <p className={'name'}>{props.name}</p>
        <p className={'mail'}>vasya@putin.ru</p>
        <p className={'phone'}>{props.phone}</p>
        {Object.keys(props.headsets).map(headset => {
          return <p className={'headset'}>Oculus Rift: 1 шт</p>
        })}
        <p className={'time'}>{props.time[0]} - {props.time[props.time.length-1]}</p>
        <p className={'sum'}>{props.sum}</p>
      </Content>

      <Buttons>
        <Confirm onClick={() => useTest(6)}>
          Подтвердить
        </Confirm>
        <Cancel onClick={() => props.handleDeleteOrder(props.orderId)}/>
      </Buttons>
    </ClientCardWrapper>
  );
}

export default ClientCard;