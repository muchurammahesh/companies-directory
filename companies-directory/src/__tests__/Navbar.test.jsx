import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import { LaunchesProvider } from "@/context/LaunchesProvider";


const renderWithProvider = () =>
  render(
    <LaunchesProvider>
      <Navbar />
    </LaunchesProvider>
  );

describe("Navbar Component", () => {
  test("renders main title and assignment badge", () => {
    renderWithProvider();
    expect(screen.getByText("Companies Directory")).toBeInTheDocument();
    expect(
      screen.getByText("- Frontlines Media Assignment")
    ).toBeInTheDocument();
  });

  test("updates search filter on input change", () => {
    renderWithProvider();
    const searchInput = screen.getByPlaceholderText(
      "Search by company name..."
    );
    fireEvent.change(searchInput, { target: { value: "SpaceX" } });
    expect(searchInput.value).toBe("SpaceX");
  });

  test("favorites toggle works correctly", () => {
    renderWithProvider();
    const toggle = screen.getByRole("checkbox", { name: /favorites/i });
    expect(toggle.checked).toBe(false);
    fireEvent.click(toggle);
    expect(toggle.checked).toBe(true);
  });

  test("renders subtitle with spaces correctly", () => {
    renderWithProvider();

  
    const subtitleContainer = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === "p";
    });

    const combinedText = Array.from(subtitleContainer.querySelectorAll("span"))
      .map((el) => el.textContent)
      .join("")
      .replace(/\u00A0/g, " "); 

    expect(combinedText).toBe(
      "Explore  companies  by  industry,  location,  or  your  favorites."
    );
  });
});
