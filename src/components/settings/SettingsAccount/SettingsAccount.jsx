import SettingsChanges from "./SettingsChanges";
import Input from "./../../../UI/Input/Input";
import SaveButton from "./../../../UI/SaveButton/SaveButton";
import LeaveAccount from "./../../../UI/LeaveAccount/LeaveAccount";

import styles from "./SettingsAccount.module.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe, fetchUpdateMe } from "../../../redux/slices/profile";

const SettingsAccount = () => {
  const user = useSelector((state) => state.profileReducer.me);
  const userData = user.data;
  const [name, setName] = useState(userData.firstname);
  const [sName, setSName] = useState(userData.lastname);
  const [patronymic, setPatronymic] = useState(userData.patronymic);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.telephone);
  const [username, setUsername] = useState(userData.username);
  const [isValid, setIsValid] = useState(true);

  const formRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(userData.firstname);
    setSName(userData.lastname);
    setPatronymic(userData.patronymic);
    setEmail(userData.email);
    setPhone(userData.telephone);
    setUsername(userData.username);
  }, [userData]);
  useEffect(() => {
    if (!user.status) {
      dispatch(fetchMe());
    }
  }, []);
  useEffect(() => {
    if (user.status === "error") {
      alert("Ошибка смены данных");
      dispatch(fetchMe());
    }
  }, [user]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave(e);
    }
  };

  function handleSave() {
    if (name && sName && username) {
      const phoneNumberRegex = /^((\+7|7|8)+([0-9]){10})$/;
      const isValidPhoneNumber = phoneNumberRegex.test(phone);
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValidEmail = emailRegex.test(email);
      if (
        (isValidPhoneNumber || phone === userData.telephone) &&
        isValidEmail
      ) {
        setIsValid(true);
        const updatedUserData = {};

        if (name !== userData.firstname) {
          updatedUserData.firstname = name;
        }
        if (sName !== userData.lastname) {
          updatedUserData.lastname = sName;
        }
        if (patronymic !== userData.patronymic) {
          updatedUserData.patronymic = patronymic;
        }
        if (email !== userData.email) {
          updatedUserData.email = email;
        }
        if (phone !== userData.telephone) {
          updatedUserData.telephone = phone;
        }
        if (username !== userData.username) {
          updatedUserData.username = username;
        }

        if (Object.keys(updatedUserData).length > 0) {
          dispatch(fetchUpdateMe(updatedUserData));
        } else {
          setIsValid(false);
        }
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
  }

  return (
    <>
      <SettingsChanges />
      {/* <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave(e);
        }}
        className={styles.settings__inputs}
        onKeyDown={handleKeyDown}
      >
        <Input
          label={"Никнейм"}
          name={"name"}
          value={username || ""}
          setValue={setUsername}
          isValid={isValid}
        />
        <Input
          label={"Имя"}
          name={"name"}
          value={name || ""}
          setValue={setName}
          isValid={isValid}
        />
        <Input
          label={"Email"}
          name={"name"}
          value={email || ""}
          setValue={setEmail}
          isValid={isValid}
        />
        <Input
          label={"Фамилия"}
          name={"name"}
          value={sName || ""}
          setValue={setSName}
          isValid={isValid}
        />
        <Input
          label={"Номер телефона"}
          name={"name"}
          value={phone || ""}
          setValue={setPhone}
          isValid={isValid}
        />
        <Input
          label={"Отчество(при наличии)"}
          name={"name"}
          value={patronymic || ""}
          setValue={setPatronymic}
          isValid={isValid}
        />
      </form>
      {!isValid && <p className={styles.error}>Данные в форме некорректны</p>}
      <SaveButton doing={handleSave} params={[]} /> */}
      <div style={{ height: 100 }}></div>
      <LeaveAccount />
    </>
  );
};

export default SettingsAccount;

/*
            <div className='input-list__item'>
              <label htmlFor='name'>Никнейм</label>
              <input name='name' value={'esebchugg'} />
            </div>
            <div className='input-list__item'>
              <label htmlFor='name'>Имя</lab  el>
              <input name='name' value={'Кирилл'} />
            </div>
            <div className='input-list__item'>
              <label htmlFor='name'>Email</label>
              <input name='name' value={'Езепчук'}/>
            </div>
            <div className='input-list__item'>
              <label htmlFor='name'>Фамилия</label>
              <input name='name' value={'ezepchukk@mail.ru'}/>
            </div>
            <div className='input-list__item'>
              <label htmlFor='name'>Номер телефона</label>
              <input name='name' value={'8-985-630-41-99'}/>
            </div>
            <div className='input-list__item'>
              <label htmlFor='name'>Отчество (при наличии)</label>
              <input name='name' value={'Игоревич'}/>
            </div>



            <button className={`${styles.settings__button}  ${styles.button}`}>Сохранить</button>

  

*/
