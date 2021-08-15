import React from 'react'
import { useSelector } from 'react-redux'
import { IReduxState } from '../../store/types'
import { ModalShadow, Modal, ModalBanner, ModalContent, Avatar } from './styles'

interface IModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContainer: React.FC<IModalProps> = (props) => {
  const gitUser = useSelector(
    (state: IReduxState) => state.GitUserStateReducer.user,
  )
  console.log('🚀  Bonny ~ gitUser', gitUser)

  function close() {
    props.setOpen(false)
  }

  return (
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>Git User</ModalBanner>
        <ModalContent>
          <Avatar src={gitUser.avatar_url} />
          <span>Login: {gitUser.login}</span>
          <span>
            Criado em: {new Date(gitUser.created_at!).toLocaleDateString()}
          </span>
          <span>
            Última atualização em:{' '}
            {new Date(gitUser.updated_at!).toLocaleDateString()}
          </span>
          <a href={gitUser.html_url} target={'_blank'} rel={'no noreferrer'}>
            Ir para Git
          </a>
        </ModalContent>
      </Modal>
    </>
  )
}
