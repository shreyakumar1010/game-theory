/*Sort my entries
  sortProperty = DOM object property that is to be used to sort in ascending order
*/
function sortTypesofGames(sortProperty)
{
    var listEntries = document.getElementsByClassName("list-entry");
    listEntries = Array.prototype.slice.call(listEntries,0)
    listEntries.sort(function(a,b)
    {
        return (a[sortProperty] > b[sortProperty]);
    })
    return listEntries;
}

sortTypesofGames("id");