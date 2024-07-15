import Input from '../../../UI/Input/Input';

import styles from './SettingsSecurity.module.scss'
import { passwordInputs } from '../../../const';
import SaveButton from '../../../UI/SaveButton/SaveButton';
import { useState } from 'react';

import axios from "../../../axios";
import Cookies from 'js-cookie';

const SettingsSecurity = () => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [againPass, setAgainPass] = useState('');
  const [isSuccess, setIsSuccess] = useState(true)

  const handleSubmit = async () => {
    try {
      if (oldPass && newPass && againPass && newPass === againPass) {
        const token = Cookies.get('accessToken');
        const { data } = await axios.patch("/auth/user/me", {
          "password": newPass,
          "old_password": oldPass
        }, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        setOldPass('');
        setNewPass('');
        setAgainPass('');
      }
    } catch (error) {
      setIsSuccess(false)
      setTimeout(() => {
        setOldPass('');
        setNewPass('');
        setAgainPass('');
        setIsSuccess(true)
      }, 3000);
    }
  }
  return (
    <>
      <div className={styles.security}>
        <div className={styles.security__inputs}>
          <Input isValid={isSuccess} value={oldPass} setValue={setOldPass} label={passwordInputs[0].label} name={passwordInputs[0].name} />
          <Input isValid={isSuccess} value={newPass} setValue={setNewPass} label={passwordInputs[1].label} name={passwordInputs[1].name} />
          <p>Минимальная длина 12 символов</p>
          <Input isValid={isSuccess} value={againPass} setValue={setAgainPass} label={passwordInputs[2].label} name={passwordInputs[2].name} />
        </div>
        <SaveButton doing={handleSubmit} />
      </div>
    </>
  )
}

export default SettingsSecurity