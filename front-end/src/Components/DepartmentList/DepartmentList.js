import React from 'react';
import './DepartmentList.css';

const departmentUl = [
    {department: 'Риба', departmentReport: [
        'Карась', 'Товстолоб', 'Щука'
    ], _id: 1},
    {department: "М'ясо", departmentReport: [
        'Курка', 'Свинина', 'Телятина'
    ], _id: 2},
    {department: 'Фрукт', departmentReport: [
        'Вишня', 'Яблуко', 'Груша'
    ], _id: 3},
    {department: 'Овоч', departmentReport: [
        'Морква', 'Помідор', 'Огірок'
    ], _id: 4}
];

export default class DepartmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentList: []
        };
    }

/*    getDeparnmentList(url) {
        fetch(url, {method: 'GET'})
            .then((res) => {
                res.json().then((data) => {
                    this.setState({
                        departmentList: data
                    })
                })
            });
    }

    componentDidMount() {
        this.getDeparnmentList('/getDepartmentList');
    }
*/
    render() {
//        const departmentList = this.state.departmentList.map((item) => <li>{item.department}</li>)
    const departmentList = departmentUl.map((item, index) => {
        const subList = item.departmentReport.map((subItem, index2) => <a href='#' key={index2}>{subItem}</a>)
        return (
            <li key={index} id={item._id} className='DepartmentList__item'>
                <a href={'#'+item._id} className='DepartmentList__link'>{item.department}</a>
                <div className='DepartmentList__sublist'>
                    {subList}
                </div>
            </li>
        )
    })
        return (
            <ul className='DepartmentList'>
                {departmentList}
            </ul>
        )
    }
}