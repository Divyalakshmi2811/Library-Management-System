import React from 'react'
function MemoComponent({name}) {
    console.log("Memo Component")
return (
        <div>
            <h2>Memo Component Props Value {name}</h2>
        </div>
        )
}

export default React.memo(MemoComponent)