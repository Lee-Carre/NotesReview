class t{constructor(){if(new.target===t)throw new TypeError('Abstract class "UI" cannot be instantiated directly');if(void 0===this.show)throw new TypeError("Must override method show()");this.notes=[],this.query=null}get(t){return this.notes.find((e=>e.id===t))}update(t,e){const r=this.notes.findIndex((e=>e.id===t));if(-1===r)throw new Error(`The note with the id ${t} could not be found in the array`);return this.notes[r]=e,this.reload()}reload(){return this.show(this.notes,this.query,!0)}}export default t;