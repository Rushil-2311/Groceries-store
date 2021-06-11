const authAction = {
    ADD:"ADD",
    REMOVE:"REMOVE",
    ID:"ID",

    add:()=>{
        return{
            type:authAction.ADD,
        };
    },
    remove:()=>{
        return{
            type:authAction.REMOVE,
        };
    },
    yourId:(id)=>{
        return{
            type:authAction.ID,
            id:id
        }
    }
};

export default authAction;