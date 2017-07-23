const $ = function (selector) {
  let dom
  if (typeof selector === 'string') {
    dom = document.querySelector(selector)
  } else if (selector instanceof HTMLElement) {
    dom = selector
  }
  return new $Element(dom)
}

class $Element {
  constructor (_doms) {
    const doms = _doms.constructor === Array || _doms.constructor === NodeList ? _doms : [_doms]
    this.doms = doms
    this.init()
    for (let i = 0; i < doms.length; i += 1) {
      this[i] = doms[i]
      if (!doms[i].listeners) {
        doms[i].listeners = {}
      }
    }
  }

  on(eventType, callback) {
    this.doms.forEach(function(dom) {
      if (!dom.listeners[eventType]) {
        dom.listeners[eventType] = []
      }
      dom.listeners[eventType].push(callback)
    }, this)
  }

  trigger(eventType, event) {
    this.doms.forEach(function(dom) {
      $Element.dispatchEvent(dom, eventType, event)
    })
  }

  static dispatchEvent(dom, eventType, event) {
    const listeners = dom.listeners[eventType]
    if (listeners) {
      listeners.forEach(function(listener) {
        listener.call(dom, event)
      })
    }
  }
  initTapEvent(dom) {
    let x1 = 0, 
        x2 = 0, 
        y1 = 0, 
        y2 = 0
     dom.addEventListener('touchstart', function(event) {
       const touch = event.touchs[0]
       x1 = touch.pageX
       y1 = touch.pageY
     })
     dom.addEventListener('touchmove', function(event) {
       const touch = event.touchs[0]
       x2 = touch.pageX
       y2 = touch.pageY
     })   
     dom.addEventListener('touchend', function(event) {
       if (Math.abs(x2 - x1) < 10 && Math.abs(y2 - y1) < 10) {
         $Element.dispatchEvent(dom, "tap", new $Event(x1, y1))
       }
      y2 = x2 = 0
     })
  }
}

class $Event {
  constructor (pageX, pageY) {
    this.pageX = pageX
    this.pageY = pageY
  }
}

window.$ = $