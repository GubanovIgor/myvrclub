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
        <p className={'name'}>Вася</p>
        <p className={'mail'}>vasya@putin.ru</p>
        <p className={'phone'}>+7 999 777 33 11</p>
        <p className={'headset'}>Oculus Rift: 1 шт</p>
        <p className={'headset'}>PS VR: 2 шт</p>
        <p className={'time'}>14:00 - 17:00</p>
        <p className={'sum'}>3750 руб</p>
      </Content>

      <Buttons>
        <Confirm onClick={() => useTest(6)}>
          Подтвердить
        </Confirm>
        <Cancel/>
      </Buttons>
    </ClientCardWrapper>
  );
}

export default ClientCard;