import React from 'react'

function Cards() {
    return (
        <div>
            <div>
                <span>We send your need to 30+ pet sitters instantly.</span>
                <br />  <br />  <br />
                <span>Get Pet Sitters, Taxis, Groomers or Dog Walkers</span><br />
                <span>We match your pets to trusted local pet boarding, grooming and dog walking services instantly.</span>
            </div>
            <br />  <br />  <br />
            <div className="row">
                <div className='col-3'>
                    <div className="card mb-3  d-flex" id='batch'>
                        <img src="https://content.petbacker.com/images/cms/icons/make-request.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Make a Request</h5>
                            <p className="card-text">Answer a few quick questions about the pet service you want.</p>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className="card mb-3  d-flex" id='batch'>
                        <img src="https://content.petbacker.com/images/cms/icons/match-with-sitter.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Match with Backers</h5>
                            <p className="card-text">Get up to 5 cost estimates from pet sitters shortly.</p>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className="card mb-3  d-flex" id='batch'>
                        <img src="https://content.petbacker.com/images/cms/icons/book-and-meet.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Book to Meet</h5>
                            <p className="card-text">Choose a Backer and place a deposit to schedule a meet & greet.</p>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className="card mb-3  d-flex" id='batch'>
                        <img src="https://content.petbacker.com/images/cms/icons/confirm-backer.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Confirm the Backer</h5>
                            <p className="card-text">Proceed with the Backer if suitable otherwise inform us to meet other</p>
                        </div>
                    </div>
                </div>
            </div>
     <div>
        <button type="button">Make a Request</button>
        <br/> <br/> <br/>
        <img src='	https://content.petbacker.com/images/cms/icons/dog-icon.png'></img>

     </div>
        </div>
    )
}

export default Cards