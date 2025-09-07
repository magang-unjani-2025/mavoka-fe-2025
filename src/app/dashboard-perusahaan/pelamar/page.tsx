"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useApplicants } from "@/lib/mock-pelamar";
import type { Applicant, InterviewPayload } from "@/types/pelamar";

import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
import Filter from "@/app/components/dashboard/perusahaan/data-pelamar/filter";
import Table from "@/app/components/dashboard/perusahaan/data-pelamar/table";
import InterviewModal from "@/app/components/dashboard/perusahaan/data-pelamar/interviewModal";
import TablePager from "@/app/components/dashboard/perusahaan/data-pelamar/tablePager";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

export default function PelamarListPage() {
  const {
    loading, positions, items, total,
    page, perPage, totalPages, setPage, setPerPage,
    posisiId, status, setFilterPosisi, setFilterStatus,
    onInterview, onAccept, onReject,
  } = useApplicants();

  const search = useSearchParams();
  const buildDetailHref = (id: string) => {
    const qs = search.toString();
    return qs ? `/dashboard-perusahaan/pelamar/${id}?${qs}` : `/dashboard-perusahaan/pelamar/${id}`;
  };

  const [openInterview, setOpenInterview] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  function handleInterviewClick(a: Applicant) {
    setSelectedApplicant(a);
    setOpenInterview(true);
  }

  async function handleInterviewSubmit(payload: InterviewPayload) {
    if (!selectedApplicant) return;
    await onInterview(selectedApplicant.id, payload);
    setOpenInterview(false);
    setSuccessMsg("Informasi Pelaksanaan Interview berhasil dikirim!");
    setSuccessOpen(true);
  }

  async function handleAccept(id: string) {
    await onAccept(id);
    setSuccessMsg("Pelamar telah Diterima.");
    setSuccessOpen(true);
  }

  async function handleReject(id: string) {
    await onReject(id);
    setSuccessMsg("Pelamar telah Ditolak.");
    setSuccessOpen(true);
  }

  return (
    <DashboardLayout2>
      <div className="w-full">
        <h1 className="mb-4 text-2xl font-semibold text-gray-900">Data Pelamar Magang</h1>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <Filter
            positions={positions}
            posisiId={posisiId}
            status={status}
            onChangePosisi={setFilterPosisi}
            onChangeStatus={setFilterStatus}
          />

          <div className="rounded-xl border border-gray-200 p-3">
            {loading ? (
              <div className="p-6 text-center text-gray-500">Memuat data…</div>
            ) : (
              <Table
                data={items}
                onInterviewClick={handleInterviewClick}
                onAccept={handleAccept}
                onReject={handleReject}
                buildDetailHref={buildDetailHref}
              />
            )}
          </div>

<TablePager
  page={page}
  totalPages={totalPages}
  onPageChange={setPage}
  perPage={perPage}
  onPerPageChange={setPerPage}
  total={total}
  itemLabel="pelamar"
/>

        </div>

        <InterviewModal
          open={openInterview}
          onClose={() => setOpenInterview(false)}
          applicant={selectedApplicant}
          onSubmit={handleInterviewSubmit}
        />

        <SuccessModal
          open={successOpen}
          title="Berhasil"
          message={successMsg}
          onClose={() => setSuccessOpen(false)}
          autoCloseMs={1800}
        />
      </div>
    </DashboardLayout2>
  );
}
