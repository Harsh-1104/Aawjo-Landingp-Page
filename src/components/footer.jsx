import React from "react";

export const Footer = () => {
  return (
    <footer id="footer" class="container-fluid text-center w-100">
      <div>
        ©
        <script>
          document.write(new Date().getFullYear());
        </script>
        <a href="https://qitsolution.co.in/">Quantum IT Solution</a>. All Rights Reserved.
      </div>
    </footer>
  );
};
