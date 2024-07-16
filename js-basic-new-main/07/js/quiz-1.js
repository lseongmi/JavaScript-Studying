		var numbers = [2, 4, 6, 8, 10];
		showArray(numbers);

		function showArray(arr) {
			var sum = 0;
			var str = "<table><tr>";

			for(var j = 0; j <arr.length; j++) {
				sum +=arr[j];
			}

			arr.push(sum);
			for (var i=0; i<arr.length; i++) {
				
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}