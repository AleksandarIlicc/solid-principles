import React, { useState } from "react";
import { SearchInput } from "./searchInput";

export function LSP() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <SearchInput value={value} onChange={handleChange} isLarge />;
}
