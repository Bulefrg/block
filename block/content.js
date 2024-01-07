const blockedNumbers = ["1", "2", "3", "4"];

function removeNumbersOnPage() {
  const textNodes = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );
  let textNode;

  while ((textNode = textNodes.nextNode())) {
    let textContent = textNode.nodeValue;

    // Удаляем цифры 1, 2, 3 и 4 с учётом полных чисел
    blockedNumbers.forEach((number) => {
      textContent = textContent.replace(new RegExp(`\\b${number}\\b`, "g"), "");
    });

    textNode.nodeValue = textContent;
  }
}

removeNumbersOnPage();
