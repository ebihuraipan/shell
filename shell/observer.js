


// //
// function ObserverList(){
//     this.observerList = [];
// }
// ObserverList.prototype.Add = function(obj){
//     return this.observerList.push(obj)
// };
// ObserverList.prototype.Empty = function(){
//     this.observerList = [];
// };
// ObserverList.prototype.Count = function(){
//     return this.observerList.length;
// };
// ObserverList.prototype.Get = function(){
//     return this.observerList[i];
// };
//
// Subject.prototype.AddObserver = function(observer){
    //     this.observers.push(observer);
    // };
    // Subject.prototype.Notify = function(obs){
    //     for (i=0;i<this.observers.length;i++) {
    //         let isAll = true
    //         let _obs = this.observers[i];
    //         for(_v in _obs){
    //             if(_obs[_v] != obs[_v]){
    //                 isAll = false
    //                 break;
    //             }
    //         }
    //         if(isAll){
    //             console.log( _obs )
    //         }
            
    //     }
    // };

//
function Observer(obj){
    this.id = obj.id
    this.timing = obj.timing
    this.anm = obj.anm
}
Observer.prototype.Comparison = function(oobs){ // other_obs
    let bid = (this.id == oobs.id ) ? true : false
    let btiming = (this.timing.indexOf(oobs.timing) != -1) ? true : false;
    let banm = (this.anm.indexOf(oobs.anm) != -1) ? true : false;
    return (bid && btiming && banm) ? true : false
}
//
function Subject(){
    this.observers = [];
    this.Set = function(obs){
        this.observers.push(obs);
    };
    this.Call = function(call_obs, func){
        for (i=0;i<this.observers.length;i++) {
            // let isAll = true
            // console.log( this.observers[i].id );
            let is_match =  this.observers[i].Comparison(call_obs)

            if(is_match){
                func(call_obs)
            }
        }
    };
}
// 

//
let subject = new Subject()
let obs1 = new Observer({id:1, timing:["aaa"], anm:["111"]});
let obs2 = new Observer({id:2, timing:["bbb"], anm:["222"]});
let obs3 = new Observer({id:3, timing:["ccc"], anm:["333"]});
let obs4 = new Observer({id:4, timing:["ddd"], anm:["444"]});
subject.Set(obs1);
subject.Set(obs2);
subject.Set(obs3);
let func1 = function(obs){
    console.log( obs );
};
subject.Call(new Observer({id:2, timing:"bbb",anm:"222"}), func1);
// subject.AddObserver(new Observer({id:1, timing:"aaa"}))
// subject.push(new Observer({id:1, timing:"aaa"}))
// subject.Notify(new Observer({id:3, timing:"aaa"}))
// subject.Notify(new Observer({id:1, timing:"aaa"}))