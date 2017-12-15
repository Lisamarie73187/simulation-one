module.exports = {
    getOne: (req,res,next) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.read_product([id])
        .then((product) => res.status(200).send(product))
        .catch(()=> res.status(500).send)
    },
    readAll: (req,res,next) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.read_all()
        .then((product) => res.status(200).send(product))
        .catch(()=> res.status(500).send)
    },
    update:(req,res,next) => {
        const db = req.app.get ('db');
         const {id} = req.params;
        const {desc} = req.query; 
        // simulation --66C
         db.update_product([id, desc])
        //  simulation 74HIJ and 74L and 74M
        .then( () => res.status(200).json())
        .catch( () => res.status(500).send())
},
    delete:(req,res,next)=>{
    const db = req.app.get ('db');
    const {id} = req.params
    db.delete_product([id])
    .then( () => res.status(200).send())
    .catch( () => res.status(500).send())
},

    add: (req,res,next)=>{
        const db = req.app.get('db');
        const {id} = req.params
        db.create_product([id])
        .then( () => res.status(200).send())
        .catch( ()=> res.status(200).send())
    }
}