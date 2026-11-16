import {useMemo, useState} from "react";

import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Pagination from "../../components/common/Pagination";

import GuideToolbar from "./components/GuideToolbar";
import GuideFilter from "./components/GuideFilter";
import GuideCard from "./components/GuideCard";

import {guides} from "../../data/guides";

import "../../styles/pages/guides/guide-page.css";

const PER_PAGE = 6;

export default function GuidePage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("newest");
    const [page, setPage] = useState(1);

    const filteredGuides = useMemo(() => {
        let res = [...guides];

        if (search.trim()) {
            const keyword = search.toLowerCase();

            res = res.filter((guide) =>
                guide.title.toLowerCase().includes(keyword) ||
                guide.desc.toLowerCase().includes(keyword) ||
                guide.category.toLowerCase().includes(keyword)
            );
        }

        if (category !== "all") {
            res = res.filter((guide) => guide.category === category);
        }

        if (sort === "newest") {
            res.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }

        if (sort === "popular") {
            res.sort((a, b) => b.views - a.views);
        }

        if (sort === "quick") {
            res.sort((a, b) => a.readTime - b.readTime);
        }

        return res;
    }, [search, category, sort]);

    const totalPages = Math.ceil(filteredGuides.length / PER_PAGE);
    const start = (page - 1) * PER_PAGE;
    const currentGuides = filteredGuides.slice(start, start + PER_PAGE);

    function handleSearch(value: string) {
        setSearch(value);
        setPage(1);
    }

    function handleCategory(value: string) {
        setCategory(value);
        setPage(1);
    }

    function handleSort(value: string) {
        setSort(value);
        setPage(1);
    }

    function handleReset() {
        setSearch("");
        setCategory("all");
        setSort("newest");
        setPage(1);
    }

    return (
        <>
            <Header/>
            <Navbar/>

            <main className="guide-page">
                <div className="container">
                    <div className="guide-heading">
                        <div>
                            <span className="guide-label">Kiến thức trồng cây</span>
                            <h1>Cẩm nang trồng trọt</h1>
                            <p>Những hướng dẫn đơn giản giúp bạn trồng và chăm sóc cây tốt hơn mỗi ngày.</p>
                        </div>

                        <span className="guide-count">{filteredGuides.length} bài viết</span>
                    </div>

                    <GuideToolbar
                        search={search}
                        sort={sort}
                        onSearch={handleSearch}
                        onSort={handleSort}
                    />

                    <div className="guide-layout">
                        <GuideFilter
                            category={category}
                            onCategory={handleCategory}
                            onReset={handleReset}
                        />

                        <div className="guide-main">
                            {currentGuides.length > 0 ? (
                                <div className="guide-grid">
                                    {currentGuides.map((guide) => (
                                        <GuideCard key={guide.id} guide={guide}/>
                                    ))}
                                </div>
                            ) : (
                                <div className="guide-empty">Không tìm thấy bài viết phù hợp.</div>
                            )}

                            <Pagination page={page} totalPages={totalPages} onChange={setPage}/>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}