import React from 'react';
import styled from 'styled-components';

const Maindiv = styled.div`
display:flex;
width:500px;
margin:auto;
`;

const Div = styled.div`
box-shadow: 0px 0px 1px 0px;
width: 200px;
`;



function SmurfList(props) {

    return (
        <Maindiv>
            {
                props.smurfs.map(smurf => {
                    return (
                        <Div>
                            <p>{smurf.name} </p>
                            <p>{smurf.age} </p>
                            <p>{smurf.height} </p>
                        </Div>
                    )
                })
            }
        </Maindiv>
    )
}

export default SmurfList;