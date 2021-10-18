"user strict"

// ENTRADA DE DADOS
let $btnEnter = document.getElementById("enter");
let $input = document.getElementById("userInput");
let $ul = document.getElementById("ul");
let $item = document.getElementsByTagName('li')

// FUNÇÕES

let $inputLength = () => $input.value.length;

let $createListElement = function () { // cria a lista de tarefas
    let $li = document.createElement("li") // cria uma tag li
    $li.appendChild(document.createTextNode($input.value))// $li pega como filho o valor de input em forma de texto
    $ul.appendChild($li)// $ul adiciona como filho a $li
    $input.value = ""; // resetando

    function $crossOut() {
        $li.classList.toggle("done");// toggle= se não tiver a classe coloca, se tiver retira
    }
    $li.addEventListener('click', $crossOut);
    let $deleteBtn = document.createElement("button");// criando um botão no documento
    $deleteBtn.appendChild(document.createTextNode('X')); // criando o x do botão
    $li.appendChild($deleteBtn); // colocando dentro da $li
    $deleteBtn.addEventListener('click', $deleListItem);

    function $deleListItem() {
        $li.classList.add('delete'); // $li adiciona a classe ".delete"
    }
}

let $addListAfterClick = function() {
    if($inputLength() > 0){
        $createListElement();


    }
}

let $addListAfterKeypress = function(event) {
    if($inputLength() > 0 && event.keyCode === 13){
        $createListElement();

    }

}

$btnEnter.addEventListener('click',$addListAfterClick);

$input.addEventListener('keypress',$addListAfterKeypress);

