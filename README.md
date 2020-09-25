# Web component
Web component for an assembly line

## Start the webpack
`npm start`

## usage of the component
html tag `<suleimans-warehouse></suleimans-warehouse>`

script to include `build/bundle.js`

## Attributes
- width: Width of the element in pixels
- heigh: Height of the element in pixels
- goal: The goal amount of the correctly sorted products
- wrong_limit: Limit of the mistakes that can be made
- frequency: Frequency of the appearing products

## Methods
- init: Initialize the component and start
- start: Start the engine of the component
- stop: Stop the engine of the component
- getData: Returns the current state of the player

### Example
```
<script type="module" src="build/bundle.js"></script>
<script>
    function start() {
        document.getElementById('warehouse').start();
    }

    function stop() {
        console.log(document.getElementById('warehouse').getData());
        document.getElementById('warehouse').stop();
    }

    function initWarehouse() {
        document.getElementById('warehouse').init();
    }
</script>
<body onload="initWarehouse()">
    <suleimans-warehouse id="warehouse"
        width="450"  height="250" goal="5" wrong_limit="15"
        frequency="35"></suleimans-warehouse>
</body>
```

Full demo can be found in `index.html`. To use it run `http-server` in main directory