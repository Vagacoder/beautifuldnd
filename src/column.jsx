import React from 'react';
import { timingSafeEqual } from 'crypto';
import styled from 'styled-components';
import Task from './task';
import { Droppable } from 'react-beautifu-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    `;
const Title = styled.h3`
    padding: 8px;
    `;
const TaskList = styled.div`
    padding: 8px;
    `;

export default class Column extends React.Component {
    render (){
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {() => (
                    <TaskList>
                        {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
                    </TaskList>)}
                </Droppable>
            </Container>
        );
    }
}