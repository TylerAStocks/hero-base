import { ReactNode } from "react";


interface HoverInfoProps {
    children: ReactNode[];
    info: string;
}


const HoverInfo: React.FC<HoverInfoProps> = ({children, info}) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log('HOVERING')
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

    return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '20px', border: '1px solid black' }}
      >
        {children}
      </div>
      {isHovering && (
        <p style={{zIndex: '1000', marginTop: '10px', color: 'blue' }}>
          {info}
        </p>
      )}
    </div>
    )
}

export default HoverInfo;