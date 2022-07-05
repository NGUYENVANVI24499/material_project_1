export const getDepartmentCollection =([
    {id: '1', title: 'Development'},
    {id: '2', title: 'marketing'},
    {id: '3', title: 'Accounting'},
    {id: '4', title: 'HR'},
])

export function insertEmployee(data){
    localStorage.setItem('employees', JSON.stringify(data))
}