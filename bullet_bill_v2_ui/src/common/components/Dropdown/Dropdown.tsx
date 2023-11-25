import React, {MouseEventHandler, useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./dropdown.module.css";
import hamburgerMenu from "../../images/hamburgerMenu.png";

interface columnProps {
  value : string,
  id : string,
  onColumnClick: () => MouseEventHandler
}

interface DropDownProps {
  columnNames : Array<columnProps>,
  hamburgerWidth? : string,
  hamburgerHeight? : string
}

export const DropDown = (props:DropDownProps) => {

  const [showColumns, setShowColumns] = useState(false);

  const switchColumnsState = () => {
    showColumns ? setShowColumns(false) : setShowColumns(true);
  }

  const gridRow = (columnNames:Array<columnProps>) => {
    return columnNames.map( (column:columnProps, i:number) => {
      let columnId:string = `${column.id}_${i.toString()}`;
      return (
        <div key={columnId} 
          id={columnId} 
          className={styles.dropDownRow} 
          onClick={column.onColumnClick ? column.onColumnClick  : () => {}
        }>
          <p className={styles.dropDownBox}>{column.value}</p>
        </div>
      )
    })
  }

  const iconWidth = props.hamburgerWidth ? props.hamburgerWidth : "35px";
  const iconHeight = props.hamburgerHeight ? props.hamburgerHeight : "35px"

  return (
    <div>
      <img style={
        {width: `${iconWidth}`, height: `${iconHeight}`}} 
        src={hamburgerMenu} alt="hamburger_menu" 
        onClick={() => switchColumnsState()}>
      </img>
      <div>
        { showColumns ? (gridRow(props.columnNames)) : null }
      </div>
    </div>
  )

}

DropDown.propTypes = {
  columnNames : PropTypes.array
}

export default DropDown;