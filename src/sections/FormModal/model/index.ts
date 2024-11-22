import { createEvent, createStore } from "effector";

const openFormModal = createEvent();
const closeFormModal = createEvent();

const $isFormModalOpen = createStore(false)
  .on(openFormModal, () => true)
  .on(closeFormModal, () => false);

export { openFormModal, closeFormModal, $isFormModalOpen };
