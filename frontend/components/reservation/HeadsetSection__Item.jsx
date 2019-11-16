// Styled Components
import {
  HeadsetIcon
} from '../../stylesheets/reservation';

const HeadsetSection__Item = (props) => {
  return (
    <HeadsetIcon
      status={props.status}
      onClick={() => props.handleSelectGlasses(props.index, props.model)}
      viewBox="0 -49 512 512"><g><path id="headset" d="m493.03125 251.089844h-4.71875c-.445312-1.914063-1.078125-3.78125-1.886719-5.578125 4.136719-8.851563 1.84375-18.925781-4.832031-25.199219l-15.304688-60.46875c-1.015624-4.015625-5.101562-6.445312-9.109374-5.429688-4.015626 1.015626-6.449219 5.09375-5.429688 9.109376l12.203125 48.230468c-20.597656-8.007812-27.503906-11.308594-41.257813-13.058594l-10.796874-135.5c-.644532-8.074218-5.988282-15.058593-13.621094-17.78125l-32.679688-11.664062c-2.230468-.796875-3.730468-2.921875-3.730468-5.289062v-7.8125c0-4.230469 4.5-6.953126 8.25-4.964844l48.867187 25.921875c1.398437.742187 2.425781 2.050781 2.8125 3.585937l21.089844 83.332032c1.015625 4.015624 5.101562 6.441406 9.113281 5.429687 4.015625-1.015625 6.445312-5.09375 5.429688-9.109375l-21.089844-83.332031c-1.425782-5.636719-5.1875-10.433594-10.324219-13.15625l-48.871094-25.921875c-13.742187-7.289063-30.277343 2.683594-30.277343 18.214844v7.8125c0 8.695312 5.5 16.5 13.6875 19.417968l32.679687 11.664063c2.078125.742187 3.535156 2.648437 3.710937 4.847656l10.636719 133.515625h-303.363281l10.636719-133.515625c.171875-2.199219 1.628906-4.105469 3.710937-4.847656l32.679688-11.664063c8.1875-2.917968 13.6875-10.722656 13.6875-19.417968v-7.8125c0-15.5625-16.558594-25.492188-30.28125-18.214844l-48.867188 25.921875c-5.136718 2.722656-8.902344 7.519531-10.324218 13.152343l-45.253907 178.804688c-6.300781 5.921875-8.742187 15.300781-5.421875 23.839844.179688.464844.378906.914062.585938 1.355468-.804688 1.800782-1.4375 3.667969-1.882813 5.582032h-4.519531c-10.457031 0-18.96875 8.507812-18.96875 18.96875v50.335937c0 10.460938 8.511719 18.96875 18.96875 18.96875h4.898438c1.601562 8.230469 4.789062 16.097657 9.460937 23.191407l15.8125 24.027343c11.542969 17.535157 30.96875 28.003907 51.964844 28.003907h67.132812c13.328125 0 25.851563-6.519532 33.496094-17.4375l14.9375-21.34375c5.621094-8.03125 13.984375-13.695313 23.546875-15.949219 4.03125-.949219 6.53125-4.988281 5.582031-9.019531-.953125-4.035157-4.988281-6.53125-9.023437-5.582032-13.152344 3.101563-24.65625 10.898438-32.394532 21.949219l-14.941406 21.339844c-4.839844 6.914062-12.765625 11.042969-21.203125 11.042969h-67.132812c-15.933594 0-30.675781-7.945313-39.433594-21.253907l-15.8125-24.027343c-5.402344-8.203126-8.195313-17.71875-8.195313-27.351563 0-74.292969-.035156-69.082031.058594-70.160156 4.628906 1.671875 10.210938 1.789062 15.332032-.203125 31.757812-12.351563 36.191406-15.011719 48.175781-15.011719h309.339843c12.011719 0 16.496094 2.691406 48.175782 15.011719 5.042968 1.960937 10.503906 1.941406 15.332031.199218.085937 1 .058594-4.238281.058594 70.164063 0 9.414063-2.675781 18.972656-8.191407 27.351563l-15.816406 24.027343c-8.757812 13.308594-23.5 21.253907-39.433594 21.253907h-67.132812c-8.4375 0-16.363281-4.128907-21.203125-11.042969l-14.941406-21.339844c-7.6875-10.988281-19.113281-18.765625-32.164063-21.898437-4.03125-.960938-8.078125 1.515624-9.042968 5.542968-.96875 4.027344 1.511718 8.074219 5.539062 9.042969 9.488281 2.277344 17.792969 7.929687 23.378906 15.914063l14.941406 21.34375c7.644532 10.917968 20.164063 17.4375 33.492188 17.4375h67.132812c20.996094 0 40.421876-10.46875 51.964844-28.003907l15.8125-24.027343c4.671875-7.097657 7.859375-14.960938 9.460938-23.191407h5.097656c10.457031 0 18.96875-8.507812 18.96875-18.96875v-50.335937c0-10.460938-8.511719-18.96875-18.96875-18.96875zm-403.03125-205.902344c.390625-1.53125 1.414062-2.839844 2.816406-3.582031l48.863282-25.921875c3.773437-2 8.253906.75 8.253906 4.964844v7.8125c0 2.367187-1.5 4.496093-3.730469 5.292968l-32.679687 11.660156c-7.632813 2.726563-12.980469 9.707032-13.621094 17.785157l-10.796875 135.496093c-13.875 1.734376-22.414063 5.730469-41.257813 13.058594zm-75 275.207031v-50.335937c0-2.152344 1.816406-3.96875 3.96875-3.96875h3.695312v58.273437h-3.695312c-2.152344 0-3.96875-1.816406-3.96875-3.96875zm86.230469-93.816406c-15.214844 0-21.675781 3.613281-53.613281 16.03125-2.761719 1.074219-5.929688.21875-7.78125-2.058594-2.945313-3.621093-1.464844-8.988281 2.800781-10.671875.011719-.003906.015625-.007812.023437-.011718 30.636719-11.910157 40.21875-16.960938 58.570313-16.960938h309.339843c18.285157 0 27.757813 4.980469 58.566407 16.960938h.003906c3.429687 1.34375 5.292969 5.242187 3.890625 8.851562-1.441406 3.703125-5.597656 5.160156-8.847656 3.890625-31.96875-12.429687-38.40625-16.03125-53.613282-16.03125zm395.769531 93.816406c0 2.152344-1.816406 3.96875-3.96875 3.96875h-3.894531v-58.273437h3.894531c2.148438 0 3.96875 1.816406 3.96875 3.96875zm0 0" data-original="#000000" className="active-path" data-old_color="#000000"/></g></HeadsetIcon>
  );
}

export default HeadsetSection__Item;