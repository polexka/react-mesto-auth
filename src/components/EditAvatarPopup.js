import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  // const avatar = useRef();
  const [avatar, setAvatar] = useState('');

  function handleClose() {
    props.onClose();
  }

  function handleChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatar);
  }

  React.useEffect(() => {
    setAvatar('');
  }, [props.isOpen]);

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
      <label className="form__field">
        <input type="url" name="avatar" value={avatar || ''} onChange={handleChange} id="avatar-input" placeholder="Ссылка на картинку" className="form__input" required />
        <span className="avatar-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;