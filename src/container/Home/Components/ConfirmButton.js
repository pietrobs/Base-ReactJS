import React from 'react';
import styled from 'styled-components';
import { Button, Popconfirm } from 'antd';

const ConfirmButton = (props) => {

    const { name } = props;

    return (
        <Popconfirm {...props}>
            <Button>{name}</Button>
        </Popconfirm>
    )
}

export default ConfirmButton;
