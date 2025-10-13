"use client";
import React, { useEffect, useState } from "react";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavbarLogo,
	NavbarButton,
} from "@/components/ui/resizable-navbar";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeToggle = () => {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const saved = typeof window !== "undefined" && localStorage.getItem("theme");
		if (saved) {
			setIsDark(saved === "dark");
			document.documentElement.classList.toggle("dark", saved === "dark");
		} else if (typeof window !== "undefined") {
			const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
			setIsDark(prefersDark);
			document.documentElement.classList.toggle("dark", prefersDark);
		}
	}, []);

	const toggle = () => {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch (e) {
			// ignore
		}
	};

	
	const arctic = "#D3D1CE";
	const midnight = "#090F15";

	return (
		<button
			onClick={toggle}
			aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
			className="p-2 rounded-md pointer-events-auto"
			style={{
				background: isDark ? midnight : arctic,
				color: isDark ? arctic : midnight,
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: 36,
				height: 36,
				borderRadius: 8,
			}}
		>
			{isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
		</button>
	);
};

const Header = () => {
	const [open, setOpen] = useState(false);

	const items = [
		{ name: "Home", link: "#" },
		{ name: "About", link: "#about" },
		{ name: "Projects", link: "#projects" },
		{ name: "Contact", link: "#contact" },
	];

	return (
		<header>
			<Navbar>
				<NavBody>
					<NavbarLogo />
					<NavItems items={items} />
					<div className="ml-auto flex items-center space-x-2">
						<ThemeToggle />
					</div>
				</NavBody>

				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle isOpen={open} onClick={() => setOpen((v) => !v)} />
					</MobileNavHeader>

					<MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
						{items.map((it, idx) => (
							<a key={idx} href={it.link} className="block w-full py-2">
								{it.name}
							</a>
						))}
						<div className="mt-4">
							<ThemeToggle />
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</header>
	);
};

export default Header;
