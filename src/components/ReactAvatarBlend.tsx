import React from 'react'
import { generateHex } from '../../helpers/generaterHexColor'

interface ReactAvatarBlendProps {
  name: string
}

const ReactAvatarBlend: React.FC<ReactAvatarBlendProps> = ({ name }) => (
  <div
    style={{
      backgroundColor: generateHex(name),
      height: '30px',
      width: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1 style={{ padding: '4px', color: '#fff', fontSize: '14px' }}>{name}</h1>
  </div>
)

export default ReactAvatarBlend
