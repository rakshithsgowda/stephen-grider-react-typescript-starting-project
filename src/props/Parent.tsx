import { ChildAsFS } from './Child'

const Parent = () => {
  return (
    <div>
      <ChildAsFS color='red' onClick={() => console.log('Clinked')}>
        DBFDUCNDUIN
      </ChildAsFS>
    </div>
  )
}
export default Parent
