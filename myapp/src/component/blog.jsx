import React from 'react'

function Blog() {
    return (
        <div>
            <div>
                <h6>Great reads from our blog</h6>
                <span>It's all about tips, tricks and news about pets.</span>
            </div>
            <div className="row">
                <div className="col-3">
                    <div class="card" >
                        <div class="card-body">
                            <p class="card-text">9 tips to find the best pet sitter for your first time pet boarding
                                9 tips to find the best pet sitter for your first time pet boarding.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card" >
                        <div class="card-body">
                            <p class="card-text">Pet sitting vs Pet boarding- which is better for your dogs and cats
                                Pet sitting vs Pet boarding- which is better for your dogs and cats</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card" >
                        <div class="card-body">
                            <p class="card-text">Pet hotel: Comparison between commercial and home boarding
                                Pet hotel: Comparison between commercial and home boarding</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card" >
                        <div class="card-body">
                            <p class="card-text">The wonderful statistics and facts behind dog walking
                                The wonderful statistics and facts behind dog walking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog