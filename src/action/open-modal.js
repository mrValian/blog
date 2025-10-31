import { ACTION_TYPE } from "./constans";

export const openModal = (modalParamas) => ({
    type: ACTION_TYPE.OPEN_MODAL,
    payload: modalParamas,
});
