import React from 'react'
import styles from './SettingsIntegrations.module.scss'
import IntegrationCard from './IntegrationCard'
import { integrationcards } from '../../../const.ts'
import Checkbox from './../../../UI/Checkbox/Checkbox';
import SaveButton from './../../../UI/SaveButton/SaveButton';
import { useSelector } from 'react-redux';

const SettingsIntegrations = () => {
  const me = useSelector(state => state.profileReducer.me.data)
  return (
    <>
      <div className={styles.settings__integrations}>
        <div className={styles['integrations-cards']}>
          {
            integrationcards.length ? integrationcards.map((item, index) => {
              return (
                <IntegrationCard key={index} icon={item.icon} title={item.title} account={me.email} status={item.status} />
              )
            }) : <h3 className={styles['integrations-empty']} >Нет доступных интеграций</h3>
          }
        </div>
        <div className={styles['integration-checkbox']}>
          <Checkbox id={'integrations'} name={'Не показывать на странице'} />
        </div>
        <SaveButton />
      </div>
    </>
  )
}

export default SettingsIntegrations