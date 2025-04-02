export const initialStore = () => {
  return {
    message: null,
    contacts: [],
    loading: true,
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'addContact':
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      }
    case 'getContact':
      return {
        ...store,
        contacts: action.payload
      }
    case 'deleteContact':
      return {
        ...store,
        contacts: store.contacts.filter(contact => action.payload !== contact.id)
      }
      case 'editContact':
        return{
          ...store,
          contacts:store.contacts.map(contact => contact.id === action.payload.id? action.payload:contact)
        }
    default:
      throw Error('Unknown action.');
  }
}
