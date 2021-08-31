/** 
* @author: Alexander Chi
* @description:
* @date: 30/Agosto/2021 
**/ 

const types = [
    { key: 'primary', value: 'btn__primary', },
    { key: 'secondary', value: 'btn__secondary', },
    { key: 'link', value: 'btn__link', },
]

export function Button(props) {
    const { text, type = 'primary' } = props;
    const item = types.find(it => it.key === type);
    return (<>
       <button className={`btn ${item.value}`}>{ text }</button> 
    </>);
}

export default Button;
