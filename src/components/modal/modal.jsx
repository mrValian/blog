import styled from 'styled-components';
import { Button } from '../button';
import { useSelector } from 'react-redux';
import {
	selectModalText,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalIsOpen,
} from '../../selectors';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const isOpen = useSelector(selectModalIsOpen);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Нет
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    & .overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        position: absolute;
    }

    & .box {
        position: relative;
        z-index: 30;
        width: 400px;
        height: auto;
        margin: auto;
        top: 50%;
        transform: translate(0, -50%);
        background: #fff;
        border: 1px solid #000;
        padding: 0 20px 20px;
        text-align: center;
    }

    & .buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
`;
