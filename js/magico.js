'use strict'
var number = document.getElementById("value");
        number.addEventListener('keyup', function () {
            var number = parseInt(this.value);
            console.log(number)
            var magicSqure = createTable(number);
            showTable(magicSqure);
        });
   
        function createEnptyArr(N) {
            var square = new Array();
            for (var i = 0; i < N; i++) {
                square.splice(i, 0, new Array());
                for (var j = 0; j < N; j++) {
                    square[i].splice(i, 0, 0);
                }
            }
            return square;
        }
        function createTable(N) {
            var grid = createEnptyArr(N);
            for (var i = 0; i < N; i++)
                for (var j = 0; j < N; j++)
                    grid[i][j] = (N * i) + j + 1;
            console.log('1-16 Digit ', grid)
            if(N%2!=0){
                 var calc = (N + 1) / 2;
                for (var i = 0; i < N; i++) {
                    for (var j = 0; j < N; j++) {
                        var row = (calc + i + j) % N;
                        var col = (calc + i - j - 1 + N) % N + 1;
                        var op = (row * N) + col
                        grid[i][j] = (row * N) + col
                    }
                }
                console.log(grid)
                return grid;  
            }
             for (i = 0; i < N / 4; i++)
                for (j = 0; j < N / 4; j++)
                    grid[i][j] = (N * N + 1) - grid[i][j];
            console.log('1st left cornor', grid)
            for (i = 0; i < N / 4; i++)
                for (j = 3 * (N / 4); j < N; j++)
                    grid[i][j] = (N * N + 1) - grid[i][j];                
            console.log('1st right cornor',grid)
             for (i = 3 * N / 4; i < N; i++)
                for (j = 0; j < N / 4; j++)
                    grid[i][j] = (N * N + 1) - grid[i][j];
            console.log('Bottom Left',grid)
       
             for (i = 3 * N / 4; i < N; i++)
                for (j = 3 * N / 4; j < N; j++)
                    grid[i][j] = (N * N + 1) - grid[i][j];
            console.log('Bottom right', grid)
            for (i = N / 4; i < 3 * N / 4; i++)
                for (j = N / 4; j < 3 * N / 4; j++)
                    grid[i][j] = (N * N + 1) - grid[i][j];
            console.log("center",grid)
            return grid;
        }
        function showTable(data) {
                var table = '';
                var tdata = document.getElementById("number");
                console.log('Length',data.length)
                for (var i = 0; i < data.length; i++) {
                    table += '<tr>';
                    for (var j = 0; j < data[i].length; j++) {
                        table += '<td class="text-center">' + data[i][j] + '</td>';
                    }
                    table += '</tr>';
                }
                tdata.innerHTML = table;
            }