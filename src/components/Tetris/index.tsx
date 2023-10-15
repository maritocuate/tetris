import Display from '../Display'
import Stage from '../Stage'
import StartButton from '../StartButton'

const Tetris: React.FC = () => {
  return (
    <>
      <Stage />
      <aside>
        <div>
          <Display />
          <Display />
          <Display />
        </div>
        <StartButton />
      </aside>
    </>
  )
}

export default Tetris
