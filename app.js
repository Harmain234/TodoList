function add(){
    var list = document.getElementById('dynamicList');
    var task =document.getElementById('input').value;
    if(task === ''){
        alert('Please Enter Task!')
    }else{
        list.innerHTML += `
        <tr>
    <td class="text-start p-2">${task}</td>
    <td class="text-start p-2  cursor-pointer" 
    onclick="this.closest('tr').remove()"><button>x</button></td>

</tr>
        `;
        document.getElementById('input').value = ''
    }
}