/** 
* @author: Alexander Chi
* @description:
* @date: 30/Agosto/2021 
**/  
import {Button} from './buttons';

export function Card(props) {
    const { title, description, children, header, buttons } = props; 
    return (
        <div className="card">
          <div className="card__head">
            <img alt={title} width="300" height="160" src={header}/>
          </div>
          <div className="card__content">
            <h2 className="card__title"> {title} </h2>
            <p className="card__description"> {description} </p>
            <div className="card__body">
              {children}
            </div> 
            <div className="card__footer">
                {buttons.map((button, index) => {
                    return <Button key={`btn-f-${index}`} text={button.text} type={button.type}/>
                })} 
            </div>
          </div> 
        </div>
    );
}

export function Item(props) {
    const {icon, name, price, buttons } = props;
    return (
        <div className="card__item">
            <div className="card__icon">
                <img alt={name} width="45" height="45" src={icon} className="card__img"/>
            </div>
            <div className="card__text"> 
                <span className="title">{name}</span>
                <p className="price">{`$${price}/year`}</p>
            </div>
            <div className="card__btns">
                {buttons.map((button, index) => {
                    return <Button key={`btn-i-${index}`} text={button.text} type={button.type}/>  
                })}
            </div>
        </div>
    );
}
export default Card;