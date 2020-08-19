class Bind{
    // ... rest operator, todos os paramtros passados apartir do terceiro caem dentro de Props como um array
    constructor(model, view, ...props){
        let proxy = ProxyFactory.create(model,props, model => view.update(model));
        view.update(model);
        return proxy;
    } 
    
}