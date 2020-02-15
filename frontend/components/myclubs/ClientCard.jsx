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
  const { headsets } = props

  

  const headsetsTranslator = {
    htc_vive_pro: 'HTC Vive Pro',
    ps_vr: 'PS VR',
    oculus_rift: 'Oculus Rift',
  }

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
        {Object.keys(headsets).map((headset, i) => {
          return <p key={i} className={'headset'}>{headsetsTranslator[headset]}: {headsets[headset].length} шт</p>
        })}
        <p className={'time'}>
          {props.time.map(time => {
            return `[${time}]`
          })}
        </p>
        <p className={'sum'}>{props.sum} ₽</p>
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