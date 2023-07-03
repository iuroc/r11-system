import { Router } from 'apee-router'

new Router({
    routeSet: [
        ['home', (route) => console.log(route)]
    ]
}).start()