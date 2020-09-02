class mensagemView extends View{
    constructor(elemento){
        super(elemento);
    }

    _template(model){
        if(model.texto){
            $('#mensagemView').show();
            return  `${model.texto}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>`; 
        } 

        return '<p></p>';
    }
}