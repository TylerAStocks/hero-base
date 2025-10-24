


interface ChildProps {
    childVals: any;
    onChange: any;
    index: number;
}

const ChildForm:React.FC<ChildProps> = ({childVals, onChange, index}) => {
  
    return(
        <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <label>Type</label>
        <input onChange={(e) => onChange(e.target.value, 'type', index)}/>

        <label>Name</label>
        <input onChange={(e) => onChange(e.target.value, 'name', index)}/>

        <label>Cost</label>
        <input onChange={(e) => onChange(e.target.value, 'cost', index)}/>
                            
        <label>description</label>
        <textarea onChange={(e) => onChange(e.target.value, 'description', index)}/>
        </div>
    )
} 

export default ChildForm