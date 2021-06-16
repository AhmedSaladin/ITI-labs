import React from "react";

class Second extends React.Component {
  imgs = [
    `https://images.unsplash.com/photo-1623835585207-29d406c823ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80`,
    `https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`,
    `https://images.unsplash.com/photo-1623520333087-62b8793e3d23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`,
    `https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`,
    `https://images.unsplash.com/photo-1623764802787-eea7b530c90a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`,
    `https://images.unsplash.com/photo-1623646233730-2a516e4a825c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`,
    `https://images.unsplash.com/photo-1623686230193-df7f9e5d5cf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`,
  ];
  timer = null;
  constructor() {
    super();

    this.state = {
      count: 0,
      current_img: this.imgs[0],
    };
    this.next_img = this.next_img.bind(this);
    this.pre_img = this.pre_img.bind(this);
    this.play_img = this.play_img.bind(this);
    this.pause_img = this.pause_img.bind(this);
  }

  next_img() {
    let { count } = this.state;
    if (this.imgs.length - 1 > count) count++;
    let img = this.imgs[count];
    this.setState({ count, current_img: img });
  }

  pre_img() {
    let { count } = this.state;
    if (count > 0) count--;
    let img = this.imgs[count];
    this.setState({ count, current_img: img });
  }

  play_img() {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        let { count } = this.state;
        if (this.imgs.length - 1 === count) count = 0;
        else count++;
        let img = this.imgs[count];
        this.setState({ count, current_img: img });
      }, 2000);
    }
  }
  pause_img() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Slide Show</div>
          <div className="card-body">
            <div className="row justify-content-center">
              <img src={this.state.current_img} className="image rounded border border-5" alt="..." />
            </div>
            <div className="row justify-content-center">
              <input
                type="button"
                className="btn btn-primary col-3 bb"
                value="Previous"
                onClick={this.pre_img}
              />
              <input
                type="button"
                className="btn btn-primary col-3 bb"
                value="Play"
                onClick={this.play_img}
              />
              <input
                type="button"
                className="btn btn-primary col-3 bb"
                value="Pause"
                onClick={this.pause_img}
              />
              <input
                type="button"
                className="btn btn-primary col-3 bb"
                value="Next"
                onClick={this.next_img}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Second;
