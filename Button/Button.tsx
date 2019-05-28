import * as React from 'react';

class MatrixButton extends React.Component<any, any>  {
    public render() {
        return (
            <div className={"button " + this.props.selected ? "selected" : ""}>
                MatrixButton
            </div>
        );
    }
}

export default MatrixButton;
  